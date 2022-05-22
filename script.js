document.querySelector('.cross').style.display = 'none';

document.querySelector('.sidebar').style.display = 'none';

document.querySelector('.humburger').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.sidebar').style.display = 'inline';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300);
        document.querySelector('.hum').style.display = 'none';
    }
    else {
        document.querySelector('.hum').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';

    }
})