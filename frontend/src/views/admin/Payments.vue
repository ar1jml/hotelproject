<script setup>
import { computed, ref } from 'vue'

const search = ref('')
const statusFilter = ref('All Status')

const payments = ref([
  {
    id: 1,
    guest: 'John Smith',
    room: 'Room 102',
    amount: 150,
    method: 'Card',
    status: 'Completed',
    date: 'Jan 15, 2024 18:15',
    transactionId: 'TX9123456789'
  },
  {
    id: 2,
    guest: 'Sarah Johnson',
    room: 'Room 101',
    amount: 240,
    method: 'Bank Transfer',
    status: 'Completed',
    date: 'Jan 16, 2024 22:25',
    transactionId: 'TX987654321'
  },
  {
    id: 3,
    guest: 'Michael Brown',
    room: 'Room 202',
    amount: 300,
    method: 'Cash',
    status: 'Completed',
    date: 'Jan 17, 2024 17:20',
    transactionId: 'TX456789123'
  },
  {
    id: 4,
    guest: 'Emily Davis',
    room: 'Room 201',
    amount: 240,
    method: 'Card',
    status: 'Pending',
    date: 'Jan 19, 2024 00:50',
    transactionId: 'TX789123456'
  }
])

const totalRevenue = computed(() => {
  return payments.value
    .filter((payment) => payment.status === 'Completed')
    .reduce((total, payment) => total + payment.amount, 0)
})

const filteredPayments = computed(() => {
  const query = search.value.toLowerCase().trim()

  return payments.value.filter((payment) => {
    const matchesSearch =
      !query ||
      payment.guest.toLowerCase().includes(query) ||
      payment.room.toLowerCase().includes(query) ||
      payment.transactionId.toLowerCase().includes(query)

    const matchesStatus =
      statusFilter.value === 'All Status' ||
      payment.status === statusFilter.value

    return matchesSearch && matchesStatus
  })
})
</script>

<template>
  <div class="payment-page">

    <!-- Header -->
    <div class="page-header">

      <div class="title-wrapper">
        <div class="title-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect
              x="2"
              y="5"
              width="20"
              height="14"
              rx="2"
              stroke-width="2"
            />
            <path
              d="M2 10h20"
              stroke-width="2"
            />
          </svg>
        </div>

        <h1>Payment Management</h1>
      </div>

      <div class="revenue">
        <span>Total Revenue</span>
        <strong>${{ totalRevenue.toLocaleString() }}</strong>
      </div>

    </div>

    <!-- Filters -->
    <div class="filter-card">

      <div class="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle
            cx="11"
            cy="11"
            r="7"
            stroke-width="2"
          />
          <path
            d="m20 20-4-4"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>

        <input
          v-model="search"
          type="text"
          placeholder="Search by guest name, room number, or transaction ID..."
        />
      </div>

      <select v-model="statusFilter">
        <option>All Status</option>
        <option>Completed</option>
        <option>Pending</option>
        <option>Failed</option>
      </select>

    </div>

    <!-- Payments Table -->
    <div class="table-card">

      <div class="table-wrapper">
        <table>

          <thead>
            <tr>
              <th>GUEST & BOOKING</th>
              <th>AMOUNT</th>
              <th>METHOD</th>
              <th>STATUS</th>
              <th>DATE</th>
              <th>TRANSACTION ID</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="payment in filteredPayments"
              :key="payment.id"
            >

              <!-- Guest -->
              <td>
                <div class="guest-booking">
                  <strong>{{ payment.guest }}</strong>
                  <span>{{ payment.room }}</span>
                </div>
              </td>

              <!-- Amount -->
              <td>
                <strong class="amount">
                  ${{ payment.amount }}
                </strong>
              </td>

              <!-- Method -->
              <td>
                <div class="method">

                  <!-- Card -->
                  <svg
                    v-if="payment.method === 'Card'"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect
                      x="2"
                      y="5"
                      width="20"
                      height="14"
                      rx="2"
                      stroke-width="2"
                    />
                    <path
                      d="M2 10h20"
                      stroke-width="2"
                    />
                  </svg>

                  <!-- Bank -->
                  <svg
                    v-else-if="payment.method === 'Bank Transfer'"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 10h18M5 10v8M9 10v8M15 10v8M19 10v8M2 20h20"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 3l9 5H3l9-5z"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <!-- Cash -->
                  <svg
                    v-else
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M12 1v22"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17 5H9.5a3.5 3.5 0 000 7H15a3.5 3.5 0 010 7H6"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>

                  <span>{{ payment.method }}</span>

                </div>
              </td>

              <!-- Status -->
              <td>
                <span
                  class="status"
                  :class="payment.status.toLowerCase()"
                >
                  <span class="status-icon">
                    <svg
                      v-if="payment.status === 'Completed'"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 12l4 4L19 6"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <svg
                      v-else
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke-width="2"
                      />
                      <path
                        d="M12 7v5l3 2"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>

                  {{ payment.status }}
                </span>
              </td>

              <!-- Date -->
              <td>
                <span class="payment-date">
                  {{ payment.date }}
                </span>
              </td>

              <!-- Transaction -->
              <td>
                <span class="transaction-id">
                  {{ payment.transactionId }}
                </span>
              </td>

            </tr>

            <!-- Empty state -->
            <tr v-if="filteredPayments.length === 0">
              <td colspan="6">
                <div class="empty-state">
                  No payments found.
                </div>
              </td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>

  </div>
</template>

<style scoped>
.payment-page {
  min-height: 100vh;
  background: #f8fafc;
  padding: 30px 32px;
  color: #1e293b;
}

/* Header */

.page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 28px;
}

.title-wrapper {
  display: flex;
  align-items: center;
  gap: 14px;
}

.title-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
}

.title-icon svg {
  width: 30px;
  height: 30px;
}

h1 {
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  color: #111827;
}

/* Revenue */

.revenue {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

.revenue span {
  font-size: 11px;
  color: #64748b;
  font-weight: 600;
}

.revenue strong {
  color: #16a34a;
  font-size: 25px;
  font-weight: 700;
}

/* Filters */

.filter-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 22px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
}

.search-box {
  height: 44px;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #dfe3e8;
  border-radius: 6px;
  padding: 0 13px;
}

.search-box svg {
  width: 19px;
  height: 19px;
  color: #9ca3af;
  flex-shrink: 0;
}

.search-box input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  color: #374151;
}

.search-box input::placeholder {
  color: #9ca3af;
}

select {
  height: 44px;
  min-width: 120px;
  border: 1px solid #dfe3e8;
  border-radius: 6px;
  padding: 0 12px;
  background: white;
  color: #374151;
  font-size: 13px;
  outline: none;
  cursor: pointer;
}

/* Table */

.table-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  min-width: 1050px;
  border-collapse: collapse;
}

th {
  padding: 16px 18px;
  text-align: left;
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
}

td {
  padding: 17px 18px;
  border-bottom: 1px solid #edf0f2;
  font-size: 13px;
  color: #475569;
  vertical-align: middle;
}

tbody tr:last-child td {
  border-bottom: none;
}

tbody tr:hover {
  background: #f8fafc;
}

/* Guest */

.guest-booking {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 135px;
}

.guest-booking strong {
  color: #1f2937;
  font-weight: 600;
}

.guest-booking span {
  color: #64748b;
  font-size: 12px;
}

/* Amount */

.amount {
  color: #111827;
  font-size: 14px;
}

/* Method */

.method {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.method svg {
  width: 17px;
  height: 17px;
  color: #475569;
}

/* Status */

.status {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
}

.status-icon {
  display: flex;
  align-items: center;
}

.status-icon svg {
  width: 13px;
  height: 13px;
}

.status.completed {
  color: #15803d;
  background: #dcfce7;
}

.status.pending {
  color: #a16207;
  background: #fef3c7;
}

.status.failed {
  color: #dc2626;
  background: #fee2e2;
}

/* Date */

.payment-date {
  color: #64748b;
  white-space: nowrap;
}

/* Transaction */

.transaction-id {
  color: #64748b;
  white-space: nowrap;
}

/* Empty */

.empty-state {
  padding: 50px;
  text-align: center;
  color: #94a3b8;
}

/* Mobile */

@media (max-width: 768px) {
  .payment-page {
    padding: 20px 16px;
  }

  .page-header {
    align-items: flex-start;
  }

  h1 {
    font-size: 24px;
  }

  .revenue strong {
    font-size: 21px;
  }

  .filter-card {
    flex-direction: column;
    align-items: stretch;
  }

  select {
    width: 100%;
  }
}
</style>