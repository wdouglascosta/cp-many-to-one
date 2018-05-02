export class CapivaraManytoone {
    public $constants;
    public $functions;
    public $bindings;

    private componentName: string;
    private visibleMessage: boolean;
    private dropdown = true;
    private itemSelected;
    private debounce;
    private fieldSource;
    constructor() {
        
    }

    private data = [
        {
            "name": "Air"
        },
        {
            "name": "Stone"
        },
        {
            "name": "Granite"
        },
        {
            "name": "Polished Granite"
        },
        {
            "name": "Diorite"
        },
        {
            "name": "Andesite"
        },
        {
            "name": "Grass"
        },
        {
            "name": "Dirt"
        },
        {
            "name": "Podzol"
        },
        {
            "name": "Oak Wood Plank"
        },
        {
            "name": "Spruce Wood Plank"
        },
        {
            "name": "Birch Wood Plank"
        },
        {
            "name": "Jungle Wood Plank"
        }
    ];

    // private $onInit(){
    //     this.$functions.search('').then((resp) => {
    //         this.data = resp;
    //     })
    // }

    private toogleDropdown = (open?) => {
        this.dropdown = open ? open : !this.dropdown;
        
    }

    private getIndex = (obj) => {
        this.itemSelected = obj;
        this.toogleDropdown();

    }
    private inputSearch(evt) {
        if (this.debounce) {
            clearTimeout(this.debounce);
        }
        this.debounce = setTimeout(() => this.search(evt.target.value), 1000);
    }

    private search(param = '') {
        this.$functions.search(param)
            .then((resp) => {
                this.data = resp;
                this.toogleDropdown(true);
            });
    }


    $destroy() {
        console.log('component destroyed');
    }

    toogleMessage() {
        this.visibleMessage = !this.visibleMessage;
    }
}