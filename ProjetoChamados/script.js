function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    

    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        body.classList.remove('menu-open');
    } else {
        sidebar.classList.add('open');
        body.classList.add('menu-open');
    }
}