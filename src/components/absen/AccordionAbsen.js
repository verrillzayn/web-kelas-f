import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Mahasiswa from '../Mahasiswa.json';

const AccordionAbsen = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Minggu ke-1 Rabu</Accordion.Header>
        <Accordion.Body className="acc-body">
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-9wq8" rowspan="2">
                  no
                </th>
                <th className="tg-9wq8" rowspan="2">
                  NIM
                </th>
                <th className="tg-9wq8" rowspan="2">
                  Nama
                </th>
                <th className="tg-0pky" colspan="3">
                  minggu ke-1 / Rabu dd/mm/yyyy
                </th>
              </tr>
              <tr>
                <th className="tg-0pky">07.00-08.00</th>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
              </tr>
            </thead>
            <tbody>
              {Mahasiswa.map((e, i) => {
                return (
                  <tr>
                    <td key={e.id} className="tg-c3ow">
                      {i + 1}
                    </td>
                    <td key={e.id} className="tg-0pky">
                      {e.NIM}
                    </td>
                    <td key={e.id} className="tg-c3ow">
                      {e.nama}
                    </td>
                    <td key={e.id} className="tg-0pky tnama">
                      <label for="cars"></label>

                      <select name="cars" id="cars">
                        <option value="volvo">hadir</option>
                        <option value="saab">ijin</option>
                        <option value="mercedes">alfa</option>
                        <option value="audi">dispen</option>
                      </select>
                    </td>
                    <td key={e.id} className="tg-0pky tnama">
                      <label for="cars"></label>

                      <select name="cars" id="cars">
                        <option value="volvo">hadir</option>
                        <option value="saab">ijin</option>
                        <option value="mercedes">alfa</option>
                        <option value="audi">dispen</option>
                      </select>
                    </td>
                    <td key={e.id} className="tg-0pky tnama">
                      <label for="cars"></label>

                      <select name="cars" id="cars">
                        <option value="volvo">hadir</option>
                        <option value="saab">ijin</option>
                        <option value="mercedes">alfa</option>
                        <option value="audi">dispen</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Minggu ke-1 kamis</Accordion.Header>
        <Accordion.Body>
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-9wq8" rowspan="2">
                  no
                </th>
                <th className="tg-9wq8" rowspan="2">
                  NIM
                </th>
                <th className="tg-9wq8" rowspan="2">
                  Nama
                </th>
                <th className="tg-0pky" colspan="3">
                  minggu ke-1 / Kamis dd/mm/yyyy
                </th>
              </tr>
              <tr>
                <th className="tg-0pky">07.00-08.00</th>
                <th className="tg-0pky"></th>
                <th className="tg-0pky"></th>
              </tr>
            </thead>
            <tbody>
              {Mahasiswa.map((e, i) => {
                return (
                  <tr>
                    <td key={e.id} className="tg-c3ow">
                      {i + 1}
                    </td>
                    <td key={e.id} className="tg-0pky">
                      {e.NIM}
                    </td>
                    <td key={e.id} className="tg-c3ow">
                      {e.nama}
                    </td>
                    <td key={e.id} className="tg-0pky tnama">
                      <label for="cars"></label>

                      <select name="cars" id="cars">
                        <option value="volvo">hadir</option>
                        <option value="saab">ijin</option>
                        <option value="mercedes">alfa</option>
                        <option value="audi">dispen</option>
                      </select>
                    </td>
                    <td key={e.id} className="tg-0pky tnama">
                      <label for="cars"></label>

                      <select name="cars" id="cars">
                        <option value="volvo">hadir</option>
                        <option value="saab">ijin</option>
                        <option value="mercedes">alfa</option>
                        <option value="audi">dispen</option>
                      </select>
                    </td>
                    <td key={e.id} className="tg-0pky tnama">
                      <label for="cars"></label>

                      <select name="cars" id="cars">
                        <option value="volvo">hadir</option>
                        <option value="saab">ijin</option>
                        <option value="mercedes">alfa</option>
                        <option value="audi">dispen</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionAbsen;
