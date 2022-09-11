import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const AccordionAbsen = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <table class="tg">
            <thead>
              <tr>
                <th class="tg-9wq8" rowspan="2">
                  no
                </th>
                <th class="tg-9wq8" rowspan="2">
                  NIM
                </th>
                <th class="tg-9wq8" rowspan="2">
                  Nama
                </th>
                <th class="tg-0pky" colspan="3"></th>
              </tr>
              <tr>
                <th class="tg-0pky"></th>
                <th class="tg-0pky"></th>
                <th class="tg-0pky"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tg-c3ow">1</td>
                <td class="tg-0pky">1229230215</td>
                <td class="tg-c3ow">verrill zain syafiq</td>
                <td class="tg-0pky">h</td>
                <td class="tg-0pky">h</td>
                <td class="tg-0pky">h</td>
              </tr>
            </tbody>
          </table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionAbsen;
