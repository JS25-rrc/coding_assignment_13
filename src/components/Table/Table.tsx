import React from 'react';
import styled from 'styled-components';
import {
  TableProps,
  TableHeaderProps,
  TableRowProps,
  TableCellProps,
  TableFooterProps,
} from './Table.types';

/* ── Table ── */
const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#e5e7eb' : backgroundColor || '#ffffff'};
  color: ${({ color, disabled }) => (disabled ? '#9ca3af' : color || '#111827')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: background-color 0.2s;
  @media (max-width: 600px) {
    font-size: 0.85rem;
    display: block;
    overflow-x: auto;
  }
`;
export const Table: React.FC<TableProps> = ({
  children,
  backgroundColor,
  color,
  disabled = false,
}) => (
  <StyledTable backgroundColor={backgroundColor} color={color} disabled={disabled}>
    {children}
  </StyledTable>
);

/* ── TableHeader ── */
const StyledThead = styled.thead<TableHeaderProps>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#d1d5db' : backgroundColor || '#4f46e5'};
  color: ${({ color, disabled }) => (disabled ? '#9ca3af' : color || '#ffffff')};
  transition: background-color 0.2s;
`;
export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  backgroundColor,
  color,
  disabled = false,
}) => (
  <StyledThead backgroundColor={backgroundColor} color={color} disabled={disabled}>
    {children}
  </StyledThead>
);

/* ── TableRow ── */
const StyledTr = styled.tr<TableRowProps>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#f3f4f6' : backgroundColor || 'transparent'};
  color: ${({ color, disabled }) => (disabled ? '#9ca3af' : color || 'inherit')};
  transition: background-color 0.15s;
  &:nth-child(even) {
    background-color: ${({ disabled }) => (disabled ? '#f3f4f6' : '#f9fafb')};
  }
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#f3f4f6' : '#ede9fe')};
  }
`;
export const TableRow: React.FC<TableRowProps> = ({
  children,
  backgroundColor,
  color,
  disabled = false,
}) => (
  <StyledTr backgroundColor={backgroundColor} color={color} disabled={disabled}>
    {children}
  </StyledTr>
);

/* ── TableCell ── */
const StyledTd = styled.td<TableCellProps>`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#f3f4f6' : backgroundColor || 'transparent'};
  color: ${({ color, disabled }) => (disabled ? '#9ca3af' : color || 'inherit')};
`;
const StyledTh = styled.th<TableCellProps>`
  padding: 0.75rem 1rem;
  font-weight: 600;
  text-align: left;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#d1d5db' : backgroundColor || 'transparent'};
  color: ${({ color, disabled }) => (disabled ? '#9ca3af' : color || 'inherit')};
`;
export const TableCell: React.FC<TableCellProps> = ({
  children,
  backgroundColor,
  color,
  disabled = false,
  isHeader = false,
}) =>
  isHeader ? (
    <StyledTh backgroundColor={backgroundColor} color={color} disabled={disabled}>
      {children}
    </StyledTh>
  ) : (
    <StyledTd backgroundColor={backgroundColor} color={color} disabled={disabled}>
      {children}
    </StyledTd>
  );

/* ── TableFooter ── */
const StyledTfoot = styled.tfoot<TableFooterProps>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#d1d5db' : backgroundColor || '#f9fafb'};
  color: ${({ color, disabled }) => (disabled ? '#9ca3af' : color || '#374151')};
  font-weight: 600;
  border-top: 2px solid #e5e7eb;
  transition: background-color 0.2s;
`;
export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  backgroundColor,
  color,
  disabled = false,
}) => (
  <StyledTfoot backgroundColor={backgroundColor} color={color} disabled={disabled}>
    {children}
  </StyledTfoot>
);

export default Table;
