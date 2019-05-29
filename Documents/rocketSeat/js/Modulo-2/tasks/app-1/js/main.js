//        var attribute = document.createAttribute("boxes");
        var container = document.querySelector('#container');
        function criaQuadradoVermelho() {
            var box = document.createElement('div');
            box.setAttribute('class', 'boxes');
            container.appendChild(box);
        }
