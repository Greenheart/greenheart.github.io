import React from 'react'

import styles from './Triangles.module.css'

const Triangles = ({ color = 'white', direction = 'top' }) => {
    const sizes = [0.5, 0.8, 1.1]
    const triangles = []

    for (const size of sizes) {
        triangles.push(
            direction === 'top'
                ? {
                      borderTop: `${size}em solid ${color}`,
                      borderRight: `${size}em solid transparent`,
                  }
                : {
                      borderBottom: `${size}em solid ${color}`,
                      borderLeft: `${size}em solid transparent`,
                  }
        )
    }

    return (
        <div className={styles.trianglesContainer}>
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
