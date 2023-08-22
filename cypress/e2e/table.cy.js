describe('Handle Table', () => {
    beforeEach('Login', () => {
        cy.visit('https://demo.opencart.com/admin/')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()

        cy.get(".btn-close").click() // close warning button after login
        cy.get("#menu-customer>a").click()
        cy.get("#menu-customer>ul>li:first-child").click()
    });

    it('Get number of Columns and Rows', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .should('have.length', '10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td")
            .should('have.length', '7')
    });

    it('check cell data', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
            .contains("xvrt@test.com")
    });

    it('read all data for the first page', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, rows) => {
                cy.wrap($row).within(() => {
                    cy.get('td').each(($col, index, cols) => {
                        cy.log($col.text());
                    })
                })
            })
    });

    it.only('Pagination', () => {
        // let totalNumberPages;
        // cy.get(".col-sm-6.text-end").then((e) => {
        //     let paginationText = e.text();
        //     totalNumberPages = paginationText.substring(paginationText.indexOf("(")+1, paginationText.indexOf("Pages")-1)
        //     cy.log("Total Number of Pages = "+totalNumberPages)
        // })

        let totalNumberPages = 5;
        for (let p = 1; p <= totalNumberPages; p++) {
            if (totalNumberPages > 1) {
                cy.log("Active page is " + p)
                cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click()

                cy.wait(3000);
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(($row, index, rows) => {
                        cy.wrap($row).within(() => {
                            cy.get('td:nth-child(3)').then((e) => {
                                cy.log(e.text());
                            })
                        })
                    })

            }

        }
    });




});
