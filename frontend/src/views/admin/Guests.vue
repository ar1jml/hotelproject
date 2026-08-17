<script setup>
import { computed, ref } from 'vue'

const search = ref('')

const guests = ref([
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1-555-0123',
    address: '123 Main St, New York, NY 10001',
    idNumber: 'ID123456789',
    registered: 'Jan 15, 2024'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1-555-0456',
    address: '456 Oak Ave, Los Angeles, CA 90210',
    idNumber: 'ID987654321',
    registered: 'Jan 16, 2024'
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.brown@email.com',
    phone: '+1-555-0789',
    address: '789 Pine Rd, Chicago, IL 60601',
    idNumber: 'ID456789123',
    registered: 'Jan 17, 2024'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@email.com',
    phone: '+1-555-0321',
    address: '321 Elm St, Miami, FL 33101',
    idNumber: 'ID789123456',
    registered: 'Jan 19, 2024'
  }
])

const filteredGuests = computed(() => {
  const query = search.value.toLowerCase().trim()

  if (!query) {
    return guests.value
  }

  return guests.value.filter((guest) =>
    [
      guest.name,
      guest.email,
      guest.phone,
      guest.address,
      guest.idNumber
    ]
      .join(' ')
      .toLowerCase()
      .includes(query)
  )
})
</script>

<template>
  <div class="guest-page">

    <!-- Page Header -->
    <div class="page-header">
      <div class="title-wrapper">
        <div class="title-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
            />
            <circle
              cx="9"
              cy="7"
              r="4"
              stroke-width="2"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
            />
          </svg>
        </div>

        <h1>Guest Management</h1>
      </div>
    </div>

    <!-- Search -->
    <div class="search-card">
      <div class="search-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle
            cx="11"
            cy="11"
            r="7"
            stroke-width="2"
          />
          <path
            stroke-linecap="round"
            stroke-width="2"
            d="m20 20-4-4"
          />
        </svg>

        <input
          v-model="search"
          type="text"
          placeholder="Search guests by name, email, or phone..."
        />
      </div>
    </div>

    <!-- Guest Table -->
    <div class="table-card">

      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>GUEST</th>
              <th>CONTACT</th>
              <th>ADDRESS</th>
              <th>ID NUMBER</th>
              <th>REGISTERED</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="guest in filteredGuests"
              :key="guest.id"
            >
              <!-- Guest -->
              <td>
                <div class="guest-cell">
                  <div class="guest-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle
                        cx="9"
                        cy="7"
                        r="4"
                        stroke-width="2"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M3 21v-2a6 6 0 016-6h2a6 6 0 016 6v2"
                      />
                    </svg>
                  </div>

                  <span class="guest-name">
                    {{ guest.name }}
                  </span>
                </div>
              </td>

              <!-- Contact -->
              <td>
                <div class="contact-cell">
                  <div class="contact-line">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke-width="2"
                      />
                      <path
                        stroke-width="2"
                        d="m3 7 9 6 9-6"
                      />
                    </svg>

                    <span>{{ guest.email }}</span>
                  </div>

                  <div class="contact-line">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M22 16.92v3a2 2 0 01-2.18 2
                        19.79 19.79 0 01-8.63-3.07
                        19.5 19.5 0 01-6-6
                        19.79 19.79 0 01-3.07-8.67
                        A2 2 0 014.11 2h3
                        a2 2 0 012 1.72
                        12.84 12.84 0 00.7 2.81
                        2 2 0 01-.45 2.11L8.09 9.91
                        a16 16 0 006 6l1.27-1.27
                        a2 2 0 012.11-.45
                        12.84 12.84 0 002.81.7
                        A2 2 0 0122 16.92z"
                      />
                    </svg>

                    <span>{{ guest.phone }}</span>
                  </div>
                </div>
              </td>

              <!-- Address -->
              <td>
                <div class="address-cell">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 21s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12z"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.5"
                      stroke-width="2"
                    />
                  </svg>

                  <span>{{ guest.address }}</span>
                </div>
              </td>

              <!-- ID -->
              <td>
                <span class="id-number">
                  {{ guest.idNumber }}
                </span>
              </td>

              <!-- Registered -->
              <td>
                <span class="registered">
                  {{ guest.registered }}
                </span>
              </td>
            </tr>

            <!-- Empty state -->
            <tr v-if="filteredGuests.length === 0">
              <td colspan="5">
                <div class="empty-state">
                  No guests found.
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
.guest-page {
  min-height: 100vh;
  background: #f8fafc;
  padding: 30px 32px;
  color: #1e293b;
}

/* Header */

.page-header {
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
  width: 31px;
  height: 31px;
}

h1 {
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  color: #111827;
}

/* Search */

.search-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 22px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
}

.search-box {
  height: 44px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #dfe3e8;
  border-radius: 6px;
  padding: 0 13px;
  background: white;
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

thead {
  background: #ffffff;
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

.guest-cell {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 155px;
}

.guest-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #eaf2ff;
  color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.guest-avatar svg {
  width: 18px;
  height: 18px;
}

.guest-name {
  font-weight: 600;
  color: #1f2937;
  white-space: nowrap;
}

/* Contact */

.contact-cell {
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 190px;
}

.contact-line {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #64748b;
  white-space: nowrap;
}

.contact-line svg {
  width: 14px;
  height: 14px;
  color: #94a3b8;
  flex-shrink: 0;
}

/* Address */

.address-cell {
  display: flex;
  align-items: center;
  gap: 7px;
  min-width: 230px;
  white-space: nowrap;
}

.address-cell svg {
  width: 15px;
  height: 15px;
  color: #94a3b8;
  flex-shrink: 0;
}

/* ID */

.id-number {
  color: #475569;
  white-space: nowrap;
}

/* Registered */

.registered {
  white-space: nowrap;
  color: #64748b;
}

/* Empty */

.empty-state {
  padding: 50px;
  text-align: center;
  color: #94a3b8;
}

/* Mobile */

@media (max-width: 768px) {
  .guest-page {
    padding: 20px 16px;
  }

  h1 {
    font-size: 24px;
  }

  .title-icon {
    width: 36px;
    height: 36px;
  }

  .title-icon svg {
    width: 27px;
    height: 27px;
  }

  .search-card {
    padding: 12px;
  }
}
</style>