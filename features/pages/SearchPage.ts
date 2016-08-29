import {protractor, browser, element, by, ExpectedConditions as EC} from "protractor/globals";

export class SearchPage {

    /* Search View */
    origin = element(by.css("input[aria-labelledby='label-airport-selector-from']"));
    destination = element(by.css("input[aria-labelledby='label-airport-selector-to']"));

    departure_date_day = element(by.css("input[aria-label='Fly out: - DD']"));
    departure_date_month = element(by.css("input[aria-label='Fly out: - MM']"));
    departure_date_year = element(by.css("input[aria-label='Fly out: - YYYY']"));

    return_date_day = element(by.css("input[aria-label='Fly back: - DD']"));
    return_date_month = element(by.css("input[aria-label='Fly back: - MM']"));
    return_date_year = element(by.css("input[aria-label='Fly back: - YYYY']"));

    search_btn = element(by.css("button[ng-click='searchFlights()']"));

    /* Choose Available Fares View */
    origin_flight = element.all(by.css(".one-third.regular")).first();
    destination_flight = element.all(by.css("[model='returnFlightListModel'] .one-third.regular")).first();

    continue_btn = element(by.id("continue"));

    /* Extra services View  */
    checkout_btn = element.all(by.css("[translate='trips.summary.buttons.btn_checkout']")).first();
    reject_seats = element(by.css("[translate='trips.summary.seat.prompt.popup.reject']"));

    /* Payment View */
    title_checkout = element.all(by.css(".offers-holder h2")).first();


    get(): void {
        browser.get("https://www.ryanair.com/gb/en/");
    }

    setOrigin(name: string): void {
        browser.wait(EC.presenceOf(this.origin), 10000);
        this.origin.clear();
        this.origin.sendKeys(name);
        this.origin.sendKeys(protractor.Key.ENTER);
    }

    getOrigin(): any {
        return this.origin.getAttribute("value");
    }

    setDestination(name: string): void {
        this.destination.sendKeys(name);
        this.destination.sendKeys(protractor.Key.ENTER);
    }

    getDestination(): any {
        return this.destination.getAttribute("value");
    }

    setDepartureDate(day: string, month: string, year: string) {
        this.departure_date_day.sendKeys(day);
        this.departure_date_month.sendKeys(month);
        this.departure_date_year.sendKeys(year);
    }

    setReturnDate(day: string, month: string, year: string) {
        this.return_date_day.sendKeys(day);
        this.return_date_month.sendKeys(month);
        this.return_date_year.sendKeys(year);
    }

    doSearch(): void {
        browser.wait(EC.presenceOf(this.search_btn), 10000);
        this.origin.sendKeys(protractor.Key.ENTER);
        this.search_btn.click();
    }

    chooseStandardFlights(): void {
        browser.wait(EC.presenceOf(this.origin_flight), 10000);
        this.origin_flight.click();
        this.destination_flight.click();
    }

    SubmitSelectedFares(): void {
        this.continue_btn.click();
    }

    SubmitOrder(): void {
        this.checkout_btn.click();
        this.reject_seats.click();
    }

    getCheckoutTitle(): any {
        return this.title_checkout.getText();
    }

}
