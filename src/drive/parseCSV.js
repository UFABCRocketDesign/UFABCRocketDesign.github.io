export default function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
    const headers = rows[0].split(','); // Extract headers (assumes the first row is the header row)
    const data = []; // Initialize an array to store parsed data
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(','); // Split the row, handling '\r' characters
        const rowObject = {};
        for (let j = 0; j < headers.length; j++) {
            rowObject[headers[j]] = rowData[j];
        }
        data.push(rowObject);
    }
    return data;
}