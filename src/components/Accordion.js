import './Accordion.css'

export const Accordion = () => {

/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Simple accordion pattern example
 */


class Accordion {
  constructor(domNode) {
    this.rootEl = domNode;
    this.buttonEl = this.rootEl.querySelector('button[aria-expanded]');

    const controlsId = this.buttonEl.getAttribute('aria-controls');
    this.contentEl = document.getElementById(controlsId);

    this.open = this.buttonEl.getAttribute('aria-expanded') === 'true';

    // add event listeners
    this.buttonEl.addEventListener('click', this.onButtonClick.bind(this));
  }

  onButtonClick() {
    this.toggle(!this.open);
  }

  toggle(open) {
    // don't do anything if the open state doesn't change
    if (open === this.open) {
      return;
    }

    // update the internal state
    this.open = open;

    // handle DOM updates
    this.buttonEl.setAttribute('aria-expanded', `${open}`);
    if (open) {
      this.contentEl.removeAttribute('hidden');
    } else {
      this.contentEl.setAttribute('hidden', '');
    }
  }

  // Add public open and close methods for convenience
  open() {
    this.toggle(true);
  }

  close() {
    this.toggle(false);
  }
}

// init accordions
const accordions = document.querySelectorAll('.accordion h3');
accordions.forEach((accordionEl) => {
  new Accordion(accordionEl);
});


    return(
        <div>
            <div id="accordionGroup" class="accordion">
            <h3>
                <button type="button" aria-expanded="true" class="accordion-trigger" aria-controls="sect1" id="accordion1id">
                <span class="accordion-title">
                    Personal Information
                    <span class="accordion-icon"></span>
                </span>
                </button>
            </h3>
            <div id="sect1" role="region" aria-labelledby="accordion1id" class="accordion-panel">
                <div>
                    <p aria-hidden="true">text that is not latin</p>
                
                {/* <fieldset>
                    <p>
                    <label for="cufc1">Name<span aria-hidden="true">*</span>:</label>
                    <input type="text" value="" name="Name" id="cufc1" class="required" aria-required="true"/>
                    </p>
                    <p>
                    <label for="cufc2">Email<span aria-hidden="true">*</span>:</label>
                    <input type="text" value="" name="Email" id="cufc2" aria-required="true"/>
                    </p>
                    <p>
                    <label for="cufc3">Phone:</label>
                    <input type="text" value="" name="Phone" id="cufc3"/>
                    </p>
                    <p>
                    <label for="cufc4">Extension:</label>
                    <input type="text" value="" name="Ext" id="cufc4"/>
                    </p>
                    <p>
                    <label for="cufc5">Country:</label>
                    <input type="text" value="" name="Country" id="cufc5"/>
                    </p>
                    <p>
                    <label for="cufc6">City/Province:</label>
                    <input type="text" value="" name="City_Province" id="cufc6"/>
                    </p>
                </fieldset> */}
                </div>
            </div>
            <h3>
                <button type="button" aria-expanded="false" class="accordion-trigger" aria-controls="sect2" id="accordion2id">
                <span class="accordion-title">
                    Billing Address
                    <span class="accordion-icon"></span>
                </span>
                </button>
            </h3>
            <div id="sect2" role="region" aria-labelledby="accordion2id" class="accordion-panel" hidden="">
                <div>
                <fieldset>
                    <p>
                    <label for="b-add1">Address 1:</label>
                    <input type="text" name="b-add1" id="b-add1"/>
                    </p>
                    <p>
                    <label for="b-add2">Address 2:</label>
                    <input type="text" name="b-add2" id="b-add2"/>
                    </p>
                    <p>
                    <label for="b-city">City:</label>
                    <input type="text" name="b-city" id="b-city"/>
                    </p>
                    <p>
                    <label for="b-state">State:</label>
                    <input type="text" name="b-state" id="b-state"/>
                    </p>
                    <p>
                    <label for="b-zip">Zip Code:</label>
                    <input type="text" name="b-zip" id="b-zip"/>
                    </p>
                </fieldset>
                </div>
            </div>
            <h3>
                <button type="button" aria-expanded="false" class="accordion-trigger" aria-controls="sect3" id="accordion3id">
                <span class="accordion-title">
                    Shipping Address
                    <span class="accordion-icon"></span>
                </span>
                </button>
            </h3>
            <div id="sect3" role="region" aria-labelledby="accordion3id" class="accordion-panel" hidden="">
                <div>
                <fieldset>
                    <p>
                    <label for="m-add1">Address 1:</label>
                    <input type="text" name="m-add1" id="m-add1"/>
                    </p>
                    <p>
                    <label for="m-add2">Address 2:</label>
                    <input type="text" name="m-add2" id="m-add2"/>
                    </p>
                    <p>
                    <label for="m-city">City:</label>
                    <input type="text" name="m-city" id="m-city"/>
                    </p>
                    <p>
                    <label for="m-state">State:</label>
                    <input type="text" name="m-state" id="m-state"/>
                    </p>
                    <p>
                    <label for="m-zip">Zip Code:</label>
                    <input type="text" name="m-zip" id="m-zip"/>
                    </p>
                </fieldset>
                </div>
            </div>
            </div>
        </div>
    )
};