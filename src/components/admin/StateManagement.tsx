'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardBody } from '@/components/ui/Card'
import { 
  ALLOWED_STATES, 
  ALL_US_STATES, 
  updateStateAvailability,
  type StateAvailability 
} from '@/lib/geo'
import { Settings, MapPin, CircleCheck as CheckCircle2, Circle as XCircle, Plus, CreditCard as Edit3, Save, X, Search, Filter, Users, Calendar, CircleAlert as AlertCircle } from 'lucide-react'

interface StateManagementProps {
  isAdmin?: boolean
}

export function StateManagement({ isAdmin = false }: StateManagementProps) {
  const [states, setStates] = useState<StateAvailability[]>(ALLOWED_STATES)
  const [editingState, setEditingState] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all')
  const [showAddModal, setShowAddModal] = useState(false)

  // Simulated save function (replace with actual API call)
  const handleSaveState = async (stateCode: string, data: Partial<StateAvailability>) => {
    try {
      await updateStateAvailability(stateCode, data.isActive ?? true, data.notes)
      
      setStates(prev => prev.map(state => 
        state.stateCode === stateCode 
          ? { ...state, ...data }
          : state
      ))
      
      setEditingState(null)
    } catch (error) {
      console.error('Failed to update state:', error)
    }
  }

  const handleAddNewState = (stateCode: string) => {
    const stateInfo = ALL_US_STATES.find(s => s.stateCode === stateCode)
    if (stateInfo && !states.some(s => s.stateCode === stateCode)) {
      const newState: StateAvailability = {
        stateCode: stateInfo.stateCode,
        stateName: stateInfo.stateName,
        isActive: false,
        launchDate: new Date().toISOString(),
        notes: 'Newly added state - pending activation'
      }
      
      setStates(prev => [...prev, newState])
      setShowAddModal(false)
    }
  }

  const filteredStates = states.filter(state => {
    const matchesSearch = state.stateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         state.stateCode.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filter === 'all' || 
                         (filter === 'active' && state.isActive) ||
                         (filter === 'inactive' && !state.isActive)
    
    return matchesSearch && matchesFilter
  })

  const stats = {
    total: states.length,
    active: states.filter(s => s.isActive).length,
    inactive: states.filter(s => !s.isActive).length,
    coverage: Math.round((states.filter(s => s.isActive).length / ALL_US_STATES.length) * 100)
  }

  if (!isAdmin) {
    return (
      <div className="p-8 text-center">
        <AlertCircle className="w-16 h-16 mx-auto mb-4 text-red-500" />
        <h2 className="text-xl font-bold text-slate-900">Access Denied</h2>
        <p className="text-slate-600">Administrative access required to manage state availability.</p>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Settings className="w-8 h-8 text-brand-600" />
          <h1 className="text-3xl font-black text-slate-900">State Management</h1>
        </div>
        <p className="text-slate-600">
          Manage MPB Health service availability across all US states
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="border-0 shadow-lg">
          <CardBody className="p-6 bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-black text-slate-900">{stats.total}</div>
                <div className="text-sm text-slate-600">Total Configured</div>
              </div>
              <MapPin className="w-8 h-8 text-blue-500" />
            </div>
          </CardBody>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardBody className="p-6 bg-gradient-to-r from-green-50 to-green-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-black text-slate-900">{stats.active}</div>
                <div className="text-sm text-slate-600">Active States</div>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
          </CardBody>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardBody className="p-6 bg-gradient-to-r from-red-50 to-red-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-black text-slate-900">{stats.inactive}</div>
                <div className="text-sm text-slate-600">Inactive States</div>
              </div>
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
          </CardBody>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardBody className="p-6 bg-gradient-to-r from-purple-50 to-purple-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-black text-slate-900">{stats.coverage}%</div>
                <div className="text-sm text-slate-600">US Coverage</div>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search states..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          />
        </div>

        {/* Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
          className="px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-brand-500"
        >
          <option value="all">All States</option>
          <option value="active">Active Only</option>
          <option value="inactive">Inactive Only</option>
        </select>

        {/* Add State */}
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-brand-500 text-white rounded-xl hover:bg-brand-600 transition-colors font-semibold"
        >
          <Plus className="w-5 h-5" />
          Add State
        </button>
      </div>

      {/* States Table */}
      <Card className="border-0 shadow-lg">
        <CardBody className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left p-6 font-bold text-slate-900">State</th>
                  <th className="text-left p-6 font-bold text-slate-900">Status</th>
                  <th className="text-left p-6 font-bold text-slate-900">Launch Date</th>
                  <th className="text-left p-6 font-bold text-slate-900">Notes</th>
                  <th className="text-right p-6 font-bold text-slate-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStates.map((state) => (
                  <StateRow
                    key={state.stateCode}
                    state={state}
                    isEditing={editingState === state.stateCode}
                    onEdit={() => setEditingState(state.stateCode)}
                    onSave={(data) => handleSaveState(state.stateCode, data)}
                    onCancel={() => setEditingState(null)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>

      {/* Add State Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Add New State</h3>
              
              <div className="space-y-4">
                {ALL_US_STATES.filter(s => !states.some(existing => existing.stateCode === s.stateCode))
                  .map(state => (
                  <button
                    key={state.stateCode}
                    onClick={() => handleAddNewState(state.stateCode)}
                    className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-medium">{state.stateName}</div>
                    <div className="text-sm text-slate-500">{state.stateCode}</div>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

function StateRow({ 
  state, 
  isEditing, 
  onEdit, 
  onSave, 
  onCancel 
}: {
  state: StateAvailability
  isEditing: boolean
  onEdit: () => void
  onSave: (data: Partial<StateAvailability>) => void
  onCancel: () => void
}) {
  const [editData, setEditData] = useState(state)

  const handleSave = () => {
    onSave(editData)
  }

  if (isEditing) {
    return (
      <tr className="border-b border-slate-100 bg-slate-25">
        <td className="p-6">
          <div className="font-bold">{state.stateName}</div>
          <div className="text-sm text-slate-500">{state.stateCode}</div>
        </td>
        <td className="p-6">
          <select
            value={editData.isActive ? 'active' : 'inactive'}
            onChange={(e) => setEditData({...editData, isActive: e.target.value === 'active'})}
            className="px-3 py-2 border border-slate-300 rounded-lg"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </td>
        <td className="p-6">
          <input
            type="date"
            value={editData.launchDate?.split('T')[0] || ''}
            onChange={(e) => setEditData({...editData, launchDate: e.target.value})}
            className="px-3 py-2 border border-slate-300 rounded-lg"
          />
        </td>
        <td className="p-6">
          <input
            type="text"
            value={editData.notes || ''}
            onChange={(e) => setEditData({...editData, notes: e.target.value})}
            placeholder="Notes..."
            className="w-full px-3 py-2 border border-slate-300 rounded-lg"
          />
        </td>
        <td className="p-6 text-right">
          <div className="flex justify-end gap-2">
            <button
              onClick={handleSave}
              className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
            >
              <Save className="w-4 h-4" />
            </button>
            <button
              onClick={onCancel}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </td>
      </tr>
    )
  }

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-25">
      <td className="p-6">
        <div className="font-bold">{state.stateName}</div>
        <div className="text-sm text-slate-500">{state.stateCode}</div>
      </td>
      <td className="p-6">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
          state.isActive 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {state.isActive ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              Active
            </>
          ) : (
            <>
              <XCircle className="w-4 h-4" />
              Inactive
            </>
          )}
        </div>
      </td>
      <td className="p-6">
        <div className="text-sm">
          {state.launchDate ? new Date(state.launchDate).toLocaleDateString() : 'Not set'}
        </div>
      </td>
      <td className="p-6">
        <div className="text-sm text-slate-600">
          {state.notes || 'No notes'}
        </div>
      </td>
      <td className="p-6 text-right">
        <button
          onClick={onEdit}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Edit3 className="w-4 h-4" />
        </button>
      </td>
    </tr>
  )
}