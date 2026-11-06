// Chart rendering utility - exposes global functions
// Chart.js is optional; functions no-op if not loaded

function renderBarChart(ctx, labels, datasets, options) {
    if (!window.Chart) return null;
    return new window.Chart(ctx, {
        type: 'bar',
        data: { labels, datasets },
        options: Object.assign({
            responsive: true,
            plugins: { legend: { position: 'top' }, title: { display: false } }
        }, options || {})
    });
}

function renderLineChart(ctx, labels, datasets, options) {
    if (!window.Chart) return null;
    return new window.Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: Object.assign({
            responsive: true,
            plugins: { legend: { position: 'top' }, title: { display: false } }
        }, options || {})
    });
}
