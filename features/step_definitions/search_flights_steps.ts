import {SearchPage} from "../pages/SearchPage";
import {binding, given, then} from "cucumber-tsflow";
import Callback = cucumber.CallbackStepDefinition;

let chai = require("chai").use(require("chai-as-promised"));
let expect = chai.expect;

@binding()
class SearchPageSteps {

    static searchPage: any;

    @given(/^I am on the Ryanair Page$/)
    public GivenTwoNumbers(callback: Callback): void {
        SearchPageSteps.searchPage = new SearchPage();
        SearchPageSteps.searchPage.get();

        callback();
    }

    @then(/^I choose Almeria as my origin$/)
    public ThenChooseOrigin (callback: Callback): void {
        SearchPageSteps.searchPage.setOrigin("Almeria");
        expect(SearchPageSteps.searchPage.getOrigin()).to.eventually.equal("Almeria");

        callback();
    }

    @then(/^I choose "([^"]*)" as my origin$/)
    public ThenChooseDynamicOrigin (origin: string, callback: Callback): void {
        SearchPageSteps.searchPage.setOrigin(origin);
        expect(SearchPageSteps.searchPage.getOrigin()).to.eventually.equal(origin);

        callback();
    }

    @then(/^I choose Dublin as my destination$/)
    public ThenChooseDestination (callback: Callback): void {
        SearchPageSteps.searchPage.setDestination("Dublin");
        expect(SearchPageSteps.searchPage.getDestination()).to.eventually.equal("Dublin");

        callback();
    }

    @then(/^I saw wrong chosen places$/)
    public ThenWrongChosePlaes (callback: Callback): void {
        expect(SearchPageSteps.searchPage.getDestination()).to.eventually.not.equal("Dublina");

        callback();
    }

    @then(/^I choose "([^"]*)" as my destination$/)
    public ThenChooseDynamicDestination (destination: string, callback: Callback): void {
        SearchPageSteps.searchPage.setDestination(destination);
        expect(SearchPageSteps.searchPage.getDestination()).to.eventually.equal(destination);

        callback();
    }

    @then(/^I choose flight dates$/)
    public ThenChooseFlightDates (callback: Callback): void {
        SearchPageSteps.searchPage.setDepartureDate("10", "09", "2016");
        SearchPageSteps.searchPage.setReturnDate("24", "09", "2016");

        callback();
    }

     @then(/^I choose flight dates (\d+)\-(\d+)\-(\d+) (\d+)\-(\d+)\-(\d+)$/)
    public ThenChooseFlightDynamicDates (departure_day: string, departure_month: string, departure_year: string, return_day: string, return_month: string, return_year: string, callback: Callback): void {
        SearchPageSteps.searchPage.setDepartureDate(departure_day, departure_month, departure_year);
        SearchPageSteps.searchPage.setReturnDate(return_day, return_month, return_year);

        callback();
    }


    @then(/^I look for prices$/)
    public ThenDoSearch (callback: Callback): void {
        SearchPageSteps.searchPage.doSearch();

        callback();
    }

    @then(/^I choose cheaper flights$/)
    public ThenChooseCheaperFlights (callback: Callback): void {
        SearchPageSteps.searchPage.chooseStandardFlights();
        SearchPageSteps.searchPage.SubmitSelectedFares();

        callback();
    }

    @then(/^I reject extra services$/)
    public ThenRejectExtraServices (callback: Callback): void {
        SearchPageSteps.searchPage.SubmitOrder();

        callback();
    }

    @then(/^I set my payment datas$/)
    public ThenSetPaymentDate (callback: Callback): void {
        expect(SearchPageSteps.searchPage.getCheckoutTitle()).to.eventually.equal("We just need a few more details." +
        " Who is travelling?");

        callback();
    }

}

export = SearchPageSteps;
