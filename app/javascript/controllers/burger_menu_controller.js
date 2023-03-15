import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["menu"]

    toggleMenus() {
        if (this.menuTargets.length) {
            const menus = this.menuTargets
            menus.forEach(menu => menu.classList.toggle('hidden'))
        }
    }
}