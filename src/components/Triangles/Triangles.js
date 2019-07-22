import React from 'react'

import styles from './Triangles.module.css'

const Triangles = ({
    color = 'white',
    direction = 'top',
    sizes = [0.5, 0.8, 1.1],
    baseSize = 20.8,
}) => {
    const triangles = []

    for (const size of sizes) {
        const x = size * baseSize
        triangles.push(
            direction === 'top'
                ? {
                      borderTop: `${x}px solid ${color}`,
                      borderRight: `${x}px solid transparent`,
                  }
                : {
                      borderBottom: `${x}px solid ${color}`,
                      borderLeft: `${x}px solid transparent`,
                  }
        )
    }

    return (
        <div
            className={styles.trianglesContainer}
            style={{
                bottom: `${0.2 * baseSize}px`,
                right: `${0.2 * baseSize}px`,
                width: `${3.5 * baseSize}px`,
            }}
        >
            {triangles.map((style, i) => (
                <Triangle style={style} key={i} />
            ))}
        </div>
    )
}

const Triangle = ({ style }) => (
    <span className={styles.triangle} style={style} />
)

export default Triangles
