import React from 'react';
import Link from 'next/link';

const JobDetailPage = ({ params }: { params: { jobId: string } }) => {
    const { jobId } = params;
  // This would ideally be fetched from a database based on the jobId
  const job = {
    id: jobId,
    title: 'Security Guard',
    location: 'Manchester',
    description: 'We are looking for a reliable and experienced security guard to join our team. The ideal candidate will have a valid SIA license and a proven track record of providing excellent security services.',
    qualifications: 'Valid SIA license, First Aid certification, excellent communication skills',
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{job.title}</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{job.location}</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Description</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{job.description}</dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Qualifications</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{job.qualifications}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-6">
        <Link href={`/careers/${job.id}/apply`} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Apply for this position
        </Link>
      </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
