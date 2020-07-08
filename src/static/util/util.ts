export const getDirectJobLink = (linkWithNoise: string): string => {
    return linkWithNoise.substring(linkWithNoise.indexOf('"') + 1, linkWithNoise.lastIndexOf('"'));
};
