<script setup>
import { computed, ref } from 'vue'

const search = ref('')

const payments = ref([
  {
    id: 'PAY-1001',
    booking: '#1042',
    guest: 'John Smith',
    amount: '$360.00',
    method: 'Card',
    date: '17 Aug 2026',
    status: 'Paid'
  },
  {
    id: 'PAY-1002',
    booking: '#1043',
    guest: 'Michael Anderson',
    amount: '$500.00',
    method: 'Cash',
    date: '17 Aug 2026',
    status: 'Paid'
  },
  {
    id: 'PAY-1003',
    booking: '#1044',
    guest: 'Emma Wilson',
    amount: '$640.00',
    method: 'Pending',
    date: '17 Aug 2026',
    status: 'Pending'
  }
])

const filteredPayments = computed(() => {
  const value = search.value.toLowerCase()

  return payments.value.filter(payment =>
    payment.guest.toLowerCase().includes(value) ||
    payment.booking.toLowerCase().includes(value) ||
    payment.id.toLowerCase().includes(value)
  )
})
</script>

<template>
  <div class="page">

    <div class="page-header">

      <div>
        <h1>Payments</h1>
        <p>View and manage guest payments.</p>
      </div>

    </div>

    <div class="summary">

      <div class="summary-card">
        <span>Total Today</span>
        <strong>$860.00</strong>
      </div>

      <div class="summary-card">
        <span>Paid</span>
        <strong>$860.00</strong>
      </div>

      <div class="summary-card">
        <span>Pending</span>
        <strong>$640.00</strong>
      </div>

    </div>

    <div class="search-box">

      <input
        v-model="search"
        type="text"
        placeholder="Search payment, guest or booking..."
      />

    </div>

    <div class="table-card">

      <div class="table-header">
        <h2>Payment History</h2>
        <span>{{ filteredPayments.length }} payments</span>
      </div>

      <div class="table-wrapper">

        <table>

          <thead>

            <tr>
              <th>Payment</th>
              <th>Guest</th>
              <th>Booking</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Date</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr
              v-for="payment in filteredPayments"
              :key="payment.id"
            >

              <td>
                <strong>{{ payment.id }}</strong>
              </td>

              <td>
                {{ payment.guest }}
              </td>

              <td>
                {{ payment.booking }}
              </td>

              <td>
                <strong>{{ payment.amount }}</strong>
              </td>

              <td>
                {{ payment.method }}
              </td>

              <td>
                {{ payment.date }}
              </td>

              <td>

                <span
                  class="status"
                  :class="payment.status.toLowerCase()"
                >
                  {{ payment.status }}
                </span>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>

<style scoped>
.page {
  width: 100%;
}

.page-header {
  margin-bottom: 25px;
}

.page-header h1 {
  margin: 0 0 6px;
  font-size: 28px;
}

.page-header p {
  margin: 0;
  color: #6b7280;
}

.summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 25px;
}

.summary-card {
  background: white;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
}

.summary-card span {
  display: block;
  color: #6b7280;
  font-size: 13px;
  margin-bottom: 8px;
}

.summary-card strong {
  font-size: 26px;
}

.search-box {
  margin-bottom: 20px;
}

.search-box input {
  width: 100%;
  max-width: 450px;
  padding: 12px 15px;
  border: 1px solid #d1d5db;
  border-radius: 7px;
  box-sizing: border-box;
}

.table-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
}

.table-header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.table-header h2 {
  margin: 0;
  font-size: 18px;
}

.table-header span {
  color: #6b7280;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  padding: 14px 18px;
  text-align: left;
  background: #f9fafb;
  color: #6b7280;
  font-size: 12px;
}

td {
  padding: 17px 18px;
  border-top: 1px solid #f1f5f9;
}

.status {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
}

.paid {
  background: #dcfce7;
  color: #15803d;
}

.pending {
  background: #fef3c7;
  color: #a16207;
}

@media (max-width: 800px) {
  .summary {
    grid-template-columns: 1fr;
  }
}
</style>