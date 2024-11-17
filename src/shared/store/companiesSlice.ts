import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CompanyType } from '../../entities/companies';
import { mockDataForTable } from './mocks';
import { generateId } from '../lib';

interface CompaniesState {
  companies: CompanyType[];
}
type DeletePayload = {
  ids: string[];
  isDeleteAll: boolean;
};
type EditPayload = {
  id: string;
  key: string;
  value: string;
};

const initialState: CompaniesState = {
  companies: mockDataForTable
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    onDelete: (state, action: PayloadAction<DeletePayload>) => {
      const companiesIds = action.payload.ids;

      if (action.payload.isDeleteAll) {
        state.companies = [];
      } else {
        state.companies = state.companies.filter((company) => !companiesIds.includes(company.id));
      }
    },
    onAddNew: (state) => {
      state.companies.push({
        id: generateId(),
        name: '',
        address: ''
      });
    },
    onEdit: (state, action: PayloadAction<EditPayload>) => {
      state.companies.map((company) =>
        company.id === action.payload.id ? { ...company, [action.payload.key]: action.payload.value } : company
      );
    }
  }
});

// Action creators are generated for each case reducer function
export const { onAddNew, onDelete, onEdit } = companiesSlice.actions;

export default companiesSlice.reducer;
