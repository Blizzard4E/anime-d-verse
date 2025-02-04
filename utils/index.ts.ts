export const convertPathSlashes = (filePath: string): string => {
    return filePath.replace(/\\/g, "/");
};
