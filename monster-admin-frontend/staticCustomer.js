import { theme } from 'antd';

// https://ant.design/docs/react/customize-theme-cn 静态消费（如 less）
const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);

export {
    mapToken
}