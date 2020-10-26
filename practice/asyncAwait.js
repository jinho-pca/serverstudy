async function getData() {
    const data = 'data';
    return data;
}

async function main() {
    const data = await getData();
    console.log(data);
}

main();