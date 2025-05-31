const fs = require("fs");
const path = require("path");

// XMLから<item>...</item>ごとに分割
function extractItems(xml) {
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    const items = [];
    while ((match = itemRegex.exec(xml)) !== null) {
        items.push(match[1]);
    }
    return items;
}

// タグの中身を抽出
function extractTag(text, tag) {
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`);
    const match = text.match(regex);
    return match ? match[1] : '';
}

// CDATA削除（タイトルや本文用）
function removeCdata(str) {
    return str.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
}

// pubDateを "YYYY年MM月DD日 HH:mm" 形式に変換
function formatPubDate(pubDate) {
    // 例: "Tue, 04 Oct 2022 22:18:56 +0900"
    const date = new Date(pubDate);
    if (isNaN(date)) return pubDate; // パースできなければそのまま返す
    const pad = n => n.toString().padStart(2, '0');
    return `${date.getFullYear()}年${pad(date.getMonth() + 1)}月${pad(date.getDate())}日 ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

// <p>タグ削除
function removePTags(str) {
    return str.replace(/<\/?p[^>]*>/g, '');
}

// <br>をMarkdownの改行に
function brToMarkdownNewline(str) {
    return str.replace(/<br\s*\/?>/gi, '  \n');
}

// 本文加工
function processBody(body) {
    let text = removeCdata(body);
    text = removePTags(text);
    text = brToMarkdownNewline(text);
    return text.trim();
}

// 1アイテム分をMarkdown形式で加工
function processItemToMarkdown(itemText) {
    let title = extractTag(itemText, "title");
    let pubDate = extractTag(itemText, "pubDate");
    let body = extractTag(itemText, "content:encoded");

    // タイトルのCDATA削除
    title = removeCdata(title);
    // 本文加工
    body = processBody(body);
    // 日付フォーマット
    pubDate = formatPubDate(pubDate);

    let result = '';
    result += '## ' + title + '  \n';
    result += '### ' + pubDate + '  \n';
    result += body + '  \n\n'; // 本文後の改行を2行に

    return result;
}

async function main() {
    try {
        // XMLファイル読み込み
        const xmlPath = path.join(__dirname, "wxr", "input.xml");
        const xml = fs.readFileSync(xmlPath, "utf-8");

        // <item>ごとに分割
        const items = extractItems(xml);

        // 各アイテムをMarkdown形式で加工
        const markdownItems = items.map(processItemToMarkdown);

        // 改行で連結
        const finalMarkdown = markdownItems.join('\n');

        // mdフォルダに書き出し
        const outDir = path.join(__dirname, "md");
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir);
        }
        const outPath = path.join(outDir, "output.md");
        fs.writeFileSync(outPath, finalMarkdown, "utf-8");

        console.log("変換完了:", outPath);
    } catch (err) {
        console.error("エラー:", err);
    }
}

main();