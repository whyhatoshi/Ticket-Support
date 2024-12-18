function createSnowflakes() {
    const snowContainer = document.querySelector('.snow');
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.style.position = 'absolute';
        snowflake.style.width = '3px';
        snowflake.style.height = '3px';
        snowflake.style.backgroundColor = '#fff';
        snowflake.style.borderRadius = '50%';
        snowflake.style.top = `${Math.random() * 100}vh`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
        snowContainer.appendChild(snowflake);
    }
}

function init() {
    createSnowflakes();
}

document.addEventListener('DOMContentLoaded', init);
