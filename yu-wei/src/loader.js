export async function importHtml(entry) {
  let content = await loadSource(entry)
  console.log(content);

  // 解析script

  // 解析css

  // 解析dom
}


function loadSource(url) {
  return window.fetch(url).then(res => res.text())
}

function parseScript(content) {
  const SCRIPT_CONTENT_RE = /<script["'=\w\s]>([\w\W]*)<\/script>/g

  const scripts = []
}