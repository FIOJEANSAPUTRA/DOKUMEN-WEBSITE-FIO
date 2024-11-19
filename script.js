document.querySelectorAll('[href=^"#"]'). forEach(anchor => {
    document.addEventListener('click',function (e)) ({
        e.PreventDefault(),

        document:querySelector(this.GetAttribute('href')).scrollintoview({
            behavior: 'smooth'
        });
    )};
)};