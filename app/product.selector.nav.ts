import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {AppDataService} from './services/appdata.service'
import {InsertBreakPipe} from './insertBreak.pipe'

@Component({
    selector: 'product-selector-nav',
    pipes: [InsertBreakPipe],
    templateUrl: 'app/views/product.selector.nav.view.html'
})

export class ProductSelectorNav {
	@Input() products
	@Input() selectedProduct
	@Output() productSelected = new EventEmitter()
	private ctaText: string
	private ctaLink: string
	private enabled: boolean

	constructor(private appdata: AppDataService) {
		this.enabled = true
		var data = appdata.get()

		this.enabled = data.productselector.enabled
		this.ctaText = data.productselector.nav.text
		this.ctaLink = data.productselector.nav.link
	}

	select(product) {
		this.productSelected.emit(product)
	}
}