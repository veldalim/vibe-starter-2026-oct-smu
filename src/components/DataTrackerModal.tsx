import React, { useState } from 'react';
import { X, Search, CheckCircle2, AlertCircle, HelpCircle, Download, ShieldCheck } from 'lucide-react';
import { NATIONS_COMMITMENT_DATA } from '../data/mockArticles';

interface DataTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DataTrackerModal({ isOpen, onClose }: DataTrackerModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  if (!isOpen) return null;

  const filteredData = NATIONS_COMMITMENT_DATA.filter(item => {
    const matchesSearch = item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.delegationLead.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest max-w-4xl w-full border border-primary shadow-2xl p-6 sm:p-8 relative max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-primary">
          <div>
            <div className="flex items-center gap-2 text-error font-kicker text-xs uppercase font-extrabold tracking-widest">
              <span className="w-2 h-2 rounded-full bg-error"></span>
              GENEVA ACCORD VERIFICATION MATRIX
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold mt-1">
              Comparing Commitments Across Participant States
            </h2>
            <p className="font-body-sm text-xs sm:text-sm text-secondary mt-1 max-w-2xl">
              Data compiled from the official 88-page declaration deposited with the Swiss Federal Department of Foreign Affairs on May 21, 2025.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-secondary hover:text-primary transition-colors cursor-pointer shrink-0 ml-4"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Metric summary bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4 py-3 bg-surface-container-low border border-surface-variant px-4">
          <div>
            <div className="text-[11px] font-kicker uppercase text-secondary font-bold">TOTAL PARTICIPANTS</div>
            <div className="font-mono text-xl font-bold text-primary">34 Nations</div>
          </div>
          <div>
            <div className="text-[11px] font-kicker uppercase text-secondary font-bold">FULL RATIFICATION</div>
            <div className="font-mono text-xl font-bold text-[#137333]">11 Ratified</div>
          </div>
          <div>
            <div className="text-[11px] font-kicker uppercase text-secondary font-bold">COMPUTE CEILING</div>
            <div className="font-mono text-xl font-bold text-primary">10²⁶ FLOPs</div>
          </div>
          <div>
            <div className="text-[11px] font-kicker uppercase text-secondary font-bold">RED-TEAM LABS</div>
            <div className="font-mono text-xl font-bold text-primary">Mandatory</div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mb-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by country or envoy..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-surface border border-surface-variant pl-9 pr-3 py-1.5 text-xs font-label-nav focus:outline-none focus:border-primary placeholder:text-outline"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar font-label-nav text-xs">
            {['all', 'Full Ratification', 'Conditional Signatory', 'Observer State'].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1 rounded text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  filterStatus === status
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-high text-secondary hover:text-primary'
                }`}
              >
                {status === 'all' ? 'All Tiers' : status}
              </button>
            ))}
          </div>
        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-y-auto border border-surface-variant">
          <table className="w-full text-left font-label-nav text-xs border-collapse">
            <thead className="bg-surface-container-low text-secondary uppercase text-[10px] tracking-wider sticky top-0 border-b border-surface-variant font-bold">
              <tr>
                <th className="p-3">Nation</th>
                <th className="p-3">Delegation Chief</th>
                <th className="p-3">Red-Team Mandate</th>
                <th className="p-3">Incident Register</th>
                <th className="p-3">Hardware Audit</th>
                <th className="p-3">Threshold</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-variant">
              {filteredData.map(item => (
                <tr key={item.code} className="hover:bg-surface-bright transition-colors">
                  <td className="p-3 font-bold text-primary flex items-center gap-2 whitespace-nowrap">
                    <span className="text-base">{item.flag}</span>
                    <span>{item.country}</span>
                  </td>
                  <td className="p-3 text-secondary">{item.delegationLead}</td>
                  <td className="p-3">
                    <span
                      className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded ${
                        item.redTeamingMandate === 'Ratified'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {item.redTeamingMandate}
                    </span>
                  </td>
                  <td className="p-3 text-secondary">{item.incidentRegister}</td>
                  <td className="p-3 font-mono text-[11px] text-on-surface">{item.hardwareAudit}</td>
                  <td className="p-3 font-mono text-[11px] font-semibold">{item.computeThreshold}</td>
                  <td className="p-3 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1 font-bold text-[11px] ${
                        item.status === 'Full Ratification'
                          ? 'text-[#137333]'
                          : item.status === 'Conditional Signatory'
                          ? 'text-[#b06000]'
                          : 'text-secondary'
                      }`}
                    >
                      {item.status === 'Full Ratification' && <CheckCircle2 className="w-3.5 h-3.5" />}
                      {item.status === 'Conditional Signatory' && <AlertCircle className="w-3.5 h-3.5" />}
                      {item.status === 'Observer State' && <HelpCircle className="w-3.5 h-3.5" />}
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-surface-variant mt-3 flex flex-col sm:flex-row items-center justify-between text-caption font-label-nav text-secondary gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Article IV enforcement mechanism takes effect on October 1, 2025.</span>
          </div>
          <button
            onClick={() => {
              const csvContent = "data:text/csv;charset=utf-8," + 
                ["Country,Code,Chief,RedTeam,IncidentRegister,HardwareAudit,Threshold,Status"]
                .concat(NATIONS_COMMITMENT_DATA.map(d => `${d.country},${d.code},${d.delegationLead},${d.redTeamingMandate},${d.incidentRegister},${d.hardwareAudit},${d.computeThreshold},${d.status}`))
                .join("\n");
              const encodedUri = encodeURI(csvContent);
              const link = document.createElement("a");
              link.setAttribute("href", encodedUri);
              link.setAttribute("download", "geneva_accords_tracker_2025.csv");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="flex items-center gap-1.5 text-primary font-bold hover:underline cursor-pointer uppercase text-[11px]"
          >
            <Download className="w-3.5 h-3.5" /> Download Dataset (.CSV)
          </button>
        </div>
      </div>
    </div>
  );
}
