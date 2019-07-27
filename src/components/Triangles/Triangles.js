import React from 'react'

import styles from './Triangles.module.css'

const Triangles = ({
    color = 'white',
    direction = 'top',
    position = 'bottom',
    sizes = [0.5, 0.8, 1.1],
    baseSize = 20.8,
    totalWidth = 3.3,
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

    const containerStyle = Object.assign(
        {
            width: `${totalWidth * baseSize}px`,
            display: 'flex',
            justifyContent: 'space-between',
        },
        position === 'bottom'
            ? {
                  bottom: `${0.2 * baseSize}px`,
                  right: `${0.2 * baseSize}px`,
                  alignItems: 'flex-end',
              }
            : {
                  top: `${0.2 * baseSize}px`,
                  left: `${0.2 * baseSize}px`,
                  alignItems: 'flex-start',
              }
    )

    return (
        <div className={styles.trianglesContainer} style={containerStyle}>
            {(position === 'bottom' ? triangles : triangles.reverse()).map(
                (style, i) => (
                    <Triangle style={style} key={i} />
                )
            )}
        </div>
    )
}

const Triangle = ({ style }) => (
    <span className={styles.triangle} style={style} />
)

export default Triangles
