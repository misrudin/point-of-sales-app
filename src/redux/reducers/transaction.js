const initialState = {
  data: [],
  transaksi: {
    tanggal: '',
    jam: '',
    pelanggan: '',
    data: null,
  },
  pelanggan: 'PELANGGAN 001',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      const find = () => {
        return state.data.find((d) => d.kode === action.data.kode);
      };
      if (state.data.length > 0 && find()) {
        let dataAfterEdit = state.data.map((d) => {
          if (d.kode === action.data.kode) {
            return {...d, qty: d.qty + 1};
          }
          return d;
        });
        return {
          ...state,
          data: dataAfterEdit,
        };
      }
      let dataBaru = {...action.data, qty: 1};
      state.data.push(dataBaru);
      return {
        ...state,
        data: state.data,
      };

    case 'CANCEL_TRANSACTION':
      return {
        ...state,
        data: [],
      };
    case 'ADD_QTY':
      let dataAfetrAdd = state.data.map((d) => {
        if (d.kode === action.kode) {
          return {...d, qty: d.qty + 1};
        }
        return d;
      });
      return {
        ...state,
        data: dataAfetrAdd,
      };

    case 'MIN_QTY':
      let dataAfetrMin = state.data.map((d) => {
        if (d.kode === action.kode) {
          return {...d, qty: d.qty - 1};
        }
        return d;
      });
      return {
        ...state,
        data: dataAfetrMin,
      };

    case 'DELETE_ITEM':
      let dataAfterDelete = state.data.filter((d) => d.kode !== action.kode);
      return {
        ...state,
        data: dataAfterDelete,
      };

    case 'PILIH_PELANGGAN':
      return {
        ...state,
        pelanggan: action.pelanggan,
      };

    case 'RESET_PELANGGAN':
      return {
        ...state,
        pelanggan: 'PELANGGAN 001',
      };

    default:
      return state;
  }
};

export default authReducer;
