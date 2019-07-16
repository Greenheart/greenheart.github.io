import React from 'react'

import styles from './Chevron.module.css'
import { join } from '../../utils/Helpers'

const Chevron = ({ animated }) => (
    <div className={join(styles.chevron, animated ? styles.animation : '')} />
)

export default Chevron
