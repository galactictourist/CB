export default class AutoIncrementer {
	constructor(
		protected value = 0
	) { }

	get currentValue() {
		return this.value
	}

	get nextValue() {
		return ++this.value
	}
}
