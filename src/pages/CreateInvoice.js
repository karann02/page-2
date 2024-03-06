import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import FrameComponent from "../components/FrameComponent";
import Rate from "../components/Rate";
import "./CreateInvoice.css";

const CreateInvoice = () => {
  return (
    <div className="create-invoice">
      <FrameComponent />
      <img className="vector-icon" alt="" src="/vector1.svg" />
      <img className="vector-icon1" alt="" src="/vector.svg" />
      <img className="vector-icon2" alt="" src="/vector.svg" />
      <main className="skincare-items">
        <Rate />
        <section className="frame-group">
          <div className="text-frame">
            <div className="rectangle-shape">
              <h1 className="invoice">Invoice</h1>
              <h3 className="create-a-invoice">
                Create a invoice for your patients
              </h3>
            </div>
            <div className="union">
              <div className="skin-club-logo-logotype-white">
                <img className="subtotal-icon" loading="lazy" alt="" />
                <div className="add-frame-remove">
                  <div className="add-frame-remove-child" />
                  <div className="skincare-items-rate">
                    <div className="vitamin-a-night-serum">
                      <div className="preview-invoice">
                        <div className="templates">Templates</div>
                        <div className="create-invoice1">Create Invoice</div>
                      </div>
                    </div>
                    <div className="dr-vihang-jane-doe">
                      <div className="rate-qty-amount" />
                      <div className="frame-subtax-tax" />
                    </div>
                  </div>
                  <form className="notes-terms">
                    <div className="loremipsumdolor">
                      <div className="group-save-group-send">
                        <div className="select-person-parent">
                          <div className="select-person">Select Person</div>
                          <Form.Select
                            className="select-all-parent"
                            name="Select All"
                          >
                            <option>Select All</option>
                            <option value="test 1">test 1</option>
                            <option value="test 2">test 2</option>
                            <option value="test 3">test 3</option>
                          </Form.Select>
                        </div>
                        <div className="add-a-treatment-parent">
                          <div className="add-a-treatment">Add a Treatment</div>
                          <Form.Select className="select-all-group">
                            <option>Select All</option>
                            <option value="test 1">test 1</option>
                            <option value="test 2">test 2</option>
                            <option value="test 3">test 3</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="group-save-group-send1">
                        <div className="invoice-number-parent">
                          <div className="invoice-number">Invoice Number</div>
                          <input className="frame-child" type="text" />
                        </div>
                        <div className="select-date-parent">
                          <div className="select-date">Select Date</div>
                          <input
                            className="frame-item"
                            placeholder="dd/mm/yyyy"
                            type="date"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent">
                      <div className="rectangle-parent">
                        <div className="frame-inner" />
                        <div className="frame-wrapper">
                          <div className="treatments-parent">
                            <div className="treatments">Treatments</div>
                            <div className="amount">Amount</div>
                          </div>
                        </div>
                        <div className="vector-wrapper">
                          <img
                            className="frame-child1"
                            loading="lazy"
                            alt=""
                            src="/vector-245.svg"
                          />
                        </div>
                        <div className="frame-container">
                          <div className="anti-wrinkle-treatment-wrapper">
                            <div className="anti-wrinkle-treatment">
                              Anti wrinkle treatment
                            </div>
                          </div>
                          <div className="wrapper">
                            <div className="div">$1480</div>
                          </div>
                          <div className="billing-group">
                            <button className="rectangle-group">
                              <div className="rectangle-div" />
                              <div className="add">Add</div>
                            </button>
                            <button className="rectangle-container">
                              <div className="frame-child2" />
                              <div className="remove">Remove</div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rectangle-shape-parent">
                        <div className="rectangle-shape-parent-child" />
                        <div className="vector-parent">
                          <div className="frame-section-parent">
                            <div className="frame-subsection-parent">
                              <div className="skincare-items-group-parent">
                                <div className="rate-element-parent">
                                  <div className="treatments1">Treatments</div>
                                </div>
                                <div className="rateper-section">
                                  Rate/per section
                                </div>
                                <div className="trash-can-icon-node-parent">
                                  <div className="no-of-section">
                                    no. of section
                                  </div>
                                  <div className="total">Total</div>
                                </div>
                              </div>
                            </div>
                            <img
                              className="arrow-pointer-node-parent"
                              loading="lazy"
                              alt=""
                              src="/vector-245.svg"
                            />
                            <div className="main-container-frame-parent">
                              <div className="haircare-section-frame-parent">
                                <img
                                  className="haircare-section-frame-parent-child"
                                  loading="lazy"
                                  alt=""
                                  src="/rectangle-2789.svg"
                                />
                                <div className="hair-care-session">
                                  Hair Care Session
                                </div>
                              </div>
                              <div className="divider-line-node-parent-parent">
                                <div className="divider-line-node-parent">
                                  <img
                                    className="divider-line-node-parent-child"
                                    alt=""
                                    src="/rectangle-2788.svg"
                                  />
                                  <div className="new-subproduct-container">
                                    $145
                                  </div>
                                </div>
                                <div className="rate-parent-wrapper">
                                  <div className="rate-parent">
                                    <img
                                      className="rate-parent-child"
                                      alt=""
                                      src="/rectangle-2790.svg"
                                    />
                                    <div className="canvas-frame">8</div>
                                  </div>
                                </div>
                                <div className="divider-line-node-parent1">
                                  <img
                                    className="divider-line-node-parent-item"
                                    alt=""
                                    src="/rectangle-2791.svg"
                                  />
                                  <div className="div1">$1160</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="toggle-frame">
                          <div className="billing-group1">
                            <button className="frame-button">
                              <div className="frame-child3" />
                              <div className="add1">Add</div>
                            </button>
                            <button className="rectangle-parent1">
                              <div className="frame-child4" />
                              <div className="remove1">Remove</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="quantity-node">
                      <div className="price-node">
                        <div className="price-node-child" />
                        <div className="label-groups">
                          <div className="label-groups1">
                            <div className="label-groups2">
                              <div className="visual-vector-preview">
                                <div className="cost-rate-group">
                                  <div className="skincare-items1">
                                    Skincare Items
                                  </div>
                                </div>
                                <div className="rates-group">
                                  <img
                                    className="rates-group-child"
                                    alt=""
                                    src="/rectangle-2775.svg"
                                  />
                                  <input
                                    className="vitamin-a-night"
                                    placeholder="Vitamin A Night Serum"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="visual-vector-preview1">
                                <div className="rate-wrapper">
                                  <div className="rate">Rate</div>
                                </div>
                                <div className="vector-group">
                                  <img
                                    className="rectangle-icon"
                                    alt=""
                                    src="/rectangle-2788.svg"
                                  />
                                  <div className="div2">$90</div>
                                </div>
                              </div>
                            </div>
                            <div className="frame-div">
                              <div className="qty-wrapper">
                                <div className="qty">Qty</div>
                              </div>
                              <div className="vector-container">
                                <img
                                  className="frame-child5"
                                  alt=""
                                  src="/rectangle-2777.svg"
                                />
                                <div className="frame-cost">2</div>
                              </div>
                            </div>
                            <div className="amount-input">
                              <div className="rate-frame">
                                <div className="amount1">Amount</div>
                              </div>
                              <div className="subtotal-frame">
                                <div className="skin-club-logo">
                                  <img
                                    className="skin-club-logo-child"
                                    alt=""
                                    src="/rectangle-2788.svg"
                                  />
                                  <div className="text-amount">$180</div>
                                </div>
                                <div className="add-remove-button">
                                  <img
                                    className="fluentdelete-28-filled-icon"
                                    loading="lazy"
                                    alt=""
                                    src="/fluentdelete28filled.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="serum-container-frame">
                            <div className="parent-invoice-preview">
                              <div className="vector-frame-pair">
                                <img
                                  className="vector-frame-pair-child"
                                  alt=""
                                  src="/rectangle-2775.svg"
                                />
                                <div className="vitamin-a-night1">
                                  Vitamin A Night Serum
                                </div>
                              </div>
                            </div>
                            <div className="parent-invoice-preview1">
                              <div className="vector-parent1">
                                <img
                                  className="frame-child6"
                                  alt=""
                                  src="/rectangle-2788.svg"
                                />
                                <div className="div3">$90</div>
                              </div>
                            </div>
                            <div className="parent-invoice-preview2">
                              <div className="vector-parent2">
                                <img
                                  className="frame-child7"
                                  alt=""
                                  src="/rectangle-2777.svg"
                                />
                                <div className="div4">2</div>
                              </div>
                            </div>
                            <div className="skin-club-logo1">
                              <img
                                className="skin-club-logo-item"
                                alt=""
                                src="/rectangle-2788.svg"
                              />
                              <div className="invoice-dr-jane">$180</div>
                            </div>
                            <div className="rate-qty-amount-frame">
                              <img
                                className="fluentdelete-28-filled-icon1"
                                alt=""
                                src="/fluentdelete28filled.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="total-parent-line">
                          <div className="lineempty-space">
                            <button className="rectangle-parent2">
                              <div className="frame-child8" />
                              <div className="add2">Add</div>
                            </button>
                            <button className="rectangle-parent3">
                              <div className="frame-child9" />
                              <div className="remove2">Remove</div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="add-notes-terms-parent">
                        <div className="add-notes-terms">Add Notes/ Terms</div>
                        <div className="preview-invoice1">
                          <Form className="container">
                            <Form.Control
                              type="text"
                              placeholder="Add Notes/ Terms"
                            />
                          </Form>
                          <div className="frame-parent1">
                            <div className="subtotal-parent">
                              <div className="subtotal">Subtotal</div>
                              <div className="div5">$540.00</div>
                            </div>
                            <div className="transaction-fee-5-parent">
                              <div className="transaction-fee-5">
                                Transaction Fee 5%
                              </div>
                              <div className="rectangle-parent4">
                                <div className="frame-child10" />
                                <div className="div6">$00.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="transaction-fee">
                          <div className="discount-10-parent">
                            <div className="discount-10">Discount 10%</div>
                            <div className="rectangle-parent5">
                              <div className="frame-child11" />
                              <div className="div7">$00.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="total-parent">
                      <b className="total1">Total</b>
                      <b className="preview-invoice2">$540.00</b>
                    </div>
                  </form>
                </div>
              </div>
              <div className="group-div">
                <div className="frame-child12" />
                <div className="frame-child13" />
                <div className="frame-parent2">
                  <div className="preview-invoice-parent">
                    <div className="preview-invoice3">Preview Invoice</div>
                    <div className="vector-frame">
                      <div className="skin-club-logo-logotype-white1">
                        <div className="skin-club-logo-logotype-white-child" />
                        <img
                          className="union-frame-icon"
                          alt=""
                          src="/vector-11.svg"
                        />
                      </div>
                      <div className="skin-club-logo-logotype-white2">
                        <div className="skin-club-logo-logotype-white-item" />
                        <img
                          className="vector-icon3"
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="subtotal-frame1">
                    <div className="subtotal-frame-child" />
                    <div className="dr-vihang-jane-doe1">
                      <img
                        className="skinclublogo-logotype-white-2-icon"
                        loading="lazy"
                        alt=""
                        src="/skinclublogo-logotype-white-2@2x.png"
                      />
                      <div className="s-u-m-m-e-r-y">
                        <div className="summery">SUMMERY</div>
                        <img
                          className="rate-qty-amount-frame1"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="item">
                      <div className="frameset-vitamin-a-night-serum">
                        <div className="dr-vihang">Dr. Vihang</div>
                        <div className="jane-doe">Jane Doe</div>
                      </div>
                    </div>
                    <div className="subtotal-tax-discount-frame">
                      <div className="tax">
                        <div className="tax-child" />
                        <div className="rate-frame1">
                          <div className="rate-frame-child" />
                          <div className="subtotal-tax-frame">
                            <div className="item1">item</div>
                          </div>
                          <div className="rate1">Rate</div>
                          <div className="qty1">Qty</div>
                          <div className="amount2">Amount</div>
                        </div>
                        <div className="discount">
                          <div className="vitamin-a-night-serum-parent">
                            <div className="vitamin-a-night2">
                              Vitamin A Night Serum
                            </div>
                            <div className="group-save-group-save-send-parent">
                              <div className="group-save-group">$90</div>
                              <div className="group-save-group1">2</div>
                              <div className="discount-section">$180</div>
                            </div>
                          </div>
                        </div>
                        <div className="discount1">
                          <div className="vitamin-a-night-serum-group">
                            <div className="vitamin-a-night3">
                              Vitamin A Night Serum
                            </div>
                            <div className="parent">
                              <div className="div8">$90</div>
                              <div className="div9">2</div>
                              <div className="div10">$180</div>
                            </div>
                          </div>
                        </div>
                        <div className="discount2">
                          <div className="vitamin-a-night-serum-container">
                            <div className="vitamin-a-night4">
                              Vitamin A Night Serum
                            </div>
                            <div className="group">
                              <div className="div11">$90</div>
                              <div className="div12">2</div>
                              <div className="div13">$180</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="skin-club-logo-frame">
                        <div className="l-i-n-e">
                          <div className="summary-frame">
                            <div className="subtotal-frame2">
                              <div className="subtotal1">Subtotal</div>
                              <div className="tax-5">tax 5%</div>
                              <div className="discount-101">Discount 10%</div>
                            </div>
                            <div className="subtotal-frame3">
                              <div className="div14">$540.00</div>
                              <div className="div15">$00.00</div>
                              <div className="div16">$00.00</div>
                            </div>
                          </div>
                        </div>
                        <div className="line-separator" />
                        <div className="total-frame">
                          <div className="notes-terms-frame">
                            <div className="total2">total</div>
                            <div className="t-e-x">$540.00</div>
                          </div>
                        </div>
                        <div className="group-save-frame">
                          <div className="group-save-frame-child" />
                          <div className="save-group-send">
                            <div className="f-r-a-m-e">
                              <div className="notesterms">Notes/Terms</div>
                            </div>
                            <input
                              className="lorem-ipsum-dolor"
                              placeholder="Lorem ipsum dolor sit amet. Sit eaque assumenda qui."
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-container">
                  <div className="frame-invoice-preview">
                    <button className="group-button">
                      <div className="frame-child14" />
                      <div className="save">Save</div>
                    </button>
                    <button className="rectangle-parent6">
                      <div className="frame-child15" />
                      <div className="save-send">{`Save & Send`}</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CreateInvoice;
