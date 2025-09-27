import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe('app component', () => {
    let component: AppComponent;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent]
        }).compileComponents();
    });

    beforeEach(async () => {
        const fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    });

    it('should have initial value', () => {
        expect(component.title).toBe('devops-learning');
    });

    it('should have call function', () => {
    const result = component.getMultiplyed(component.multiplyNumber);
    expect(result).toBe(4);
    });
});
