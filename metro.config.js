// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
// @ts-ignore
const config = getDefaultConfig(__dirname);

// @ts-ignore
config.resolver.sourceExts.push('sql');

module.exports = config;
