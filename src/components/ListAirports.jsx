// import React from 'react'
import { TableView, TableHeader, Column, TableBody, Row, Cell } from '@react-spectrum/table';
import { Text } from '@adobe/react-spectrum';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiArrowSmDown } from "react-icons/hi";
import 'tailwindcss/tailwind.css';
function ListAirports() {
  const Airports = useSelector((state) => state.airports);
  return (
<TableView aria-label="Bookmarks" selectionMode="multiple">
  <TableHeader>
    <Column minWidth={700}><span className='flex gap-1 justify-center items-center'>Airports <HiArrowSmDown className='text-lg'/></span></Column>
    <Column minWidth={180}>Country</Column>
    <Column>Code</Column>
    <Column align='end' minWidth={132}>Terminals</Column>
  </TableHeader>
  <TableBody>
    {Airports.airports.map((airport) => (
      <Row key={airport.id} href={`/details/${airport.id}`} routerOptions={{ as: Link, to: `/details/${airport.id}` }}>
        <Cell><Text UNSAFE_className='font-sans'>{airport.name}</Text></Cell>
        <Cell><Text UNSAFE_className='font-sans'>{airport.country}</Text></Cell>
        <Cell><Text UNSAFE_className='font-sans'>{airport.code}</Text></Cell>
        <Cell align='end'><Text UNSAFE_className='font-sans'>2</Text></Cell>
      </Row>
    ))}
  </TableBody>
</TableView>
  )
}

export default ListAirports