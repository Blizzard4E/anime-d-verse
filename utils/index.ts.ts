export const convertPathSlashes = (filePath: string): string => {
    return filePath.replace(/\\/g, "/");
};
export function replaceNewlinesWithBr(input: string): string {
    return JSON.parse(JSON.stringify(input)).replace(/\\n/g, "<br>");
}
export function formatDate(inputDateString: string): string {
    // Convert the string to a Date object (replace space with 'T' for ISO format)
    const inputDate = new Date(inputDateString.replace(" ", "T"));

    // Define formatting options
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    // Format the date and return it
    return inputDate.toLocaleDateString("en-US", options);
}
export function convertToBr(text: string): string {
    return text.replace(/\r\n/g, "<br>");
}
