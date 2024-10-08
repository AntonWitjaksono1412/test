// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function Home() {
    const [chartData] = useState({
        series: [{
            name: 'Inflation',
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 95, 100] // Data untuk 12 bulan
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: true // Menyembunyikan toolbar ApexCharts
                }
            },
            colors: ['#4F46E5'], // Warna batang
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: 'top', // Menampilkan label di atas bar
                    },
                    columnWidth: '65%', // Lebar kolom
                    borderRadius: 4, // Membuat ujung bar sedikit melengkung
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%"; // Menambahkan simbol % pada label data
                },
                offsetY: -20,
                style: {
                    fontSize: '15px',
                    colors: ["#333"]
                }
            },
            xaxis: {
                categories: [
                    "Juli",
                    "Januari",
                    "Agustus",
                    "Februari",
                    "September",
                    "Maret",
                    "Oktober",
                    "April",
                    "November",
                    "Mei",
                    "Desember",
                    "Juni",
                ], // 12 bulan dalam setahun
                position: 'bottom', // Menampilkan label bulan di bawah
                labels: {
                    offsetY: 0, // Mengatur jarak label dari sumbu x
                    style: {
                        fontSize: '16px',
                        colors: ['#333']
                    }
                },
                axisBorder: {
                    show: true,
                    color: '#78909C', // Warna garis sumbu x
                },
                axisTicks: {
                    show: true,
                    color: '#78909C' // Warna tanda sumbu x
                }
            },
            yaxis: {
                show: true,
                labels: {
                    formatter: function (val) {
                        return val + "%"; // Menambahkan % pada label y-axis
                    },
                    style: {
                        fontSize: '16px',
                        colors: ['#4F46E5']
                    }
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                }
            },
            grid: {
                strokeDashArray: 4, // Garis grid putus-putus
                borderColor: '#ECEFF1' // Warna garis grid
            },
        }
    });

    return (
        <div className="p-6 min-h-screen">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Total Donations Card */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-xl font-semibold text-gray-700">Total Donations</h2>
                    <p className="text-4xl font-bold text-indigo-600 mt-4">Rp 10,000,000</p>
                    <p className="text-gray-500 mt-4">Total amount donated over the past year.</p>
                </div>

                {/* Recent Donations Card */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-xl font-semibold text-gray-700">Recent Donations</h2>
                    <ul className="mt-4 space-y-2">
                        <li className="flex justify-between text-gray-600">
                            <span>John donated</span>
                            <span>Rp 1,000,000</span>
                        </li>
                        <li className="flex justify-between text-gray-600">
                            <span>Jane donated</span>
                            <span>Rp 500,000</span>
                        </li>
                        <li className="flex justify-between text-gray-600">
                            <span>Michael donated</span>
                            <span>Rp 750,000</span>
                        </li>
                    </ul>
                </div>

                {/* Upcoming Events Card */}
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-xl font-semibold text-gray-700">Upcoming Events</h2>
                    <div className="mt-4 space-y-3">
                        <div className="flex items-center text-gray-600">
                            <div className="h-4 w-4 border border-gray-200 mr-4 rounded-full bg-indigo-300" />
                            Charity Walk - 5th Sep
                        </div>
                        <div className="flex items-center text-gray-600">
                            <div className="h-4 w-4 border border-gray-200 mr-4 rounded-full bg-indigo-300" />
                            Fundraising Gala - 20th Sep
                        </div>
                        <div className="flex items-center text-gray-600">
                            <div className="h-4 w-4 border border-gray-200 mr-4 rounded-full bg-indigo-300" />
                            Community Service - 15th Oct
                        </div>
                    </div>
                </div>
            </div>

            {/* Donations Chart */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-10">
                <h2 className="text-xl font-semibold text-gray-700 mb-6">Grafik Pembayaran</h2>
                <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
            </div>
        </div>
    );
}
