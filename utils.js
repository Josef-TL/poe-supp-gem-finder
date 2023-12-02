
function fetchText(numgems,query,api) {
    return fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${api}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{
                role: 'user',
                content: `Act like you have played the videogame Path of Exile for more than ${numgems} years. Give a list of 5 support gems to the gem ${query}. The list should contain support gems with the best synergy. It should only contain the names of the support gems. It should not contain awakened support gems. Take a deep breath, and then write the list. Only respond with the list.`
            }]
        })
    })
        .then(response => response.json())
        .then(data => {
            return data.choices[0].message.content
        })
}